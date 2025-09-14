import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  MemberSchema, type Member } from "../types/Member";

type Props = {
  onSubmit: (data: Member) => void;
  initialData?: Member;
};

export default function MemberForm({ onSubmit, initialData }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<Member>({
    resolver: zodResolver(MemberSchema),
    defaultValues: initialData || {
      id: crypto.randomUUID(),
      title: "",
      firstName: "",
      lastName: "",
      photo: "",
      career: "",
      achievements: "",
      ministerPosition: "",
      ministry: "",
      party: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white shadow rounded">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block font-semibold">คำนำหน้า</label>
          <input {...register("title")} className="w-full border rounded p-2"/>
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>
        <div className="flex-1">
          <label className="block font-semibold">ชื่อ</label>
          <input {...register("firstName")} className="w-full border rounded p-2"/>
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        </div>
        <div className="flex-1">
          <label className="block font-semibold">นามสกุล</label>
          <input {...register("lastName")} className="w-full border rounded p-2"/>
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label className="block font-semibold">รูปถ่าย (URL)</label>
        <input {...register("photo")} className="w-full border rounded p-2"/>
        {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
      </div>

      <div>
        <label className="block font-semibold">ประวัติการทำงาน</label>
        <textarea {...register("career")} className="w-full border rounded p-2"/>
      </div>

      <div>
        <label className="block font-semibold">ผลงานที่ผ่านมา</label>
        <textarea {...register("achievements")} className="w-full border rounded p-2"/>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block font-semibold">ตำแหน่งรัฐมนตรี</label>
          <input {...register("ministerPosition")} className="w-full border rounded p-2"/>
        </div>
        <div className="flex-1">
          <label className="block font-semibold">กระทรวง</label>
          <input {...register("ministry")} className="w-full border rounded p-2"/>
        </div>
        <div className="flex-1">
          <label className="block font-semibold">สังกัดพรรค</label>
          <input {...register("party")} className="w-full border rounded p-2"/>
        </div>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        บันทึก
      </button>
    </form>
  );
}
