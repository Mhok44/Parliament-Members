import { z } from "zod";

export const MemberSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "กรุณาเลือกคำนำหน้า"),
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  photo: z.string().url("กรุณาใส่ URL รูปถ่าย"),
  career: z.string().optional(),
  achievements: z.string().optional(),
  ministerPosition: z.string().optional(),
  ministry: z.string().optional(),
  party: z.string().optional(),
});

export type Member = z.infer<typeof MemberSchema>;