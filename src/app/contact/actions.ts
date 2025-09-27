'use server';

import { z } from 'zod';
import {
  analyzeContactFormInquiry,
  type AnalyzeContactFormInquiryInput,
  type AnalyzeContactFormInquiryOutput,
} from '@/ai/flows/analyze-contact-form-inquiry';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormState = {
  success: boolean;
  message: string;
  analysis?: AnalyzeContactFormInquiryOutput;
};

export async function handleContactSubmission(
  data: AnalyzeContactFormInquiryInput
): Promise<FormState> {
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  try {
    // In a real application, you would save the inquiry to a database here.

    const analysisResult = await analyzeContactFormInquiry(parsedData.data);

    // You might also save the analysis result or trigger notifications.
    console.log('AI Analysis:', analysisResult);

    return {
      success: true,
      message: 'Thank you for your message!',
      analysis: analysisResult,
    };
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
