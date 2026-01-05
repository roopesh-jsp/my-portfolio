import { InferenceClient } from "@huggingface/inference";

export const HFClinet = new InferenceClient(process.env.HF_API_KEY || "");
