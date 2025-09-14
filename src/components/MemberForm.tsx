import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Member } from "../types/Member";
import { MemberSchema } from "../types/Member";

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
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="bg-white shadow-lg rounded-lg p-6 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block font-medium text-gray-700">คำนำหน้า</label>
          <input {...register("title")} className="mt-1 w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500"/>
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700">ชื่อ</label>
          <input {...register("firstName")} className="mt-1 w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500"/>
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700">นามสกุล</label>
          <input {...register("lastName")} className="mt-1 w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500"/>
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700">รูปถ่าย (URL)</label>
        <input {...register("photo")} className="mt-1 w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500"/>
        {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>}
      </div>

      <div>
        <label className="block font-medium text-gray-700">ประวัติการทำงาน</label>
        <textarea {...register("career")} className="mt-1 w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500"/>
      </div>

      <div>
        <label className="block font-medium text-gray-700">ผลงานที่ผ่านมา</label>
        <textarea {...register("achievements")} className="mt-1 w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block font-medium text-gray-700">ตำแหน่งรัฐมนตรี</label>
          <input {...register("ministerPosition")} className="mt-1 w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div>
          <label className="block font-medium text-gray-700">กระทรวง</label>
          <input {...register("ministry")} className="mt-1 w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div>
          <label className="block font-medium text-gray-700">สังกัดพรรค</label>
          <input {...register("party")} className="mt-1 w-full border border-gray-300 rounded p-2 focus:ring-blue-500 focus:border-blue-500"/>
        </div>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        บันทึก
      </button>
    </form>
  );
}