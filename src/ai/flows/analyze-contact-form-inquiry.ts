// Use server directive.
'use server';

/**
 * @fileOverview Analyzes the contact form inquiry to determine the inquiry type and suggests appropriate reactions.
 *
 * - analyzeContactFormInquiry - A function that analyzes the contact form inquiry.
 * - AnalyzeContactFormInquiryInput - The input type for the analyzeContactFormInquiry function.
 * - AnalyzeContactFormInquiryOutput - The return type for the analyzeContactFormInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeContactFormInquiryInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  message: z.string().describe('The message content from the contact form.'),
});
export type AnalyzeContactFormInquiryInput = z.infer<
  typeof AnalyzeContactFormInquiryInputSchema
>;

const AnalyzeContactFormInquiryOutputSchema = z.object({
  inquiryType: z
    .string()
    .describe(
      'The type of inquiry (e.g., general question, donation, event registration, prayer request, etc.).'
    ),
  suggestedReactions: z
    .string()
    .describe(
      'Suggested reactions for the church staff (e.g., respond with information about the event, direct to the donation page, offer prayer, etc.).'
    ),
});
export type AnalyzeContactFormInquiryOutput = z.infer<
  typeof AnalyzeContactFormInquiryOutputSchema
>;

export async function analyzeContactFormInquiry(
  input: AnalyzeContactFormInquiryInput
): Promise<AnalyzeContactFormInquiryOutput> {
  return analyzeContactFormInquiryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeContactFormInquiryPrompt',
  input: {schema: AnalyzeContactFormInquiryInputSchema},
  output: {schema: AnalyzeContactFormInquiryOutputSchema},
  prompt: `You are a helpful church administrator. Analyze the contact form submission below and determine the inquiry type. Suggest appropriate reactions for the church staff.

Contact Form Submission:
Name: {{{name}}}
Email: {{{email}}}
Message: {{{message}}}

Inquiry Type: 
Suggested Reactions: `,
});

const analyzeContactFormInquiryFlow = ai.defineFlow(
  {
    name: 'analyzeContactFormInquiryFlow',
    inputSchema: AnalyzeContactFormInquiryInputSchema,
    outputSchema: AnalyzeContactFormInquiryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
