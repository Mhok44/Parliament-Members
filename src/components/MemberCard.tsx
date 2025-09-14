import type { Member } from "../types/Member";

type Props = {
  member: Member;
  onEdit: () => void;
  onDelete: () => void;
};

export default function MemberCard({ member, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <img src={member.photo} alt={`${member.firstName} ${member.lastName}`} className="w-full h-48 object-cover"/>
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-blue-900">{member.title} {member.firstName} {member.lastName}</h2>
        {member.career && <p className="text-gray-700"><strong>ประวัติ:</strong> {member.career}</p>}
        {member.achievements && <p className="text-gray-700"><strong>ผลงาน:</strong> {member.achievements}</p>}
        {(member.ministerPosition || member.ministry) && <p className="text-gray-700"><strong>ตำแหน่ง:</strong> {member.ministerPosition} {member.ministry}</p>}
        {member.party && <p className="text-gray-700"><strong>พรรค:</strong> {member.party}</p>}
        <div className="flex gap-2 mt-2">
          <button onClick={onEdit} className="flex-1 bg-yellow-400 text-white py-1 rounded hover:bg-yellow-500 transition">แก้ไข</button>
          <button onClick={onDelete} className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600 transition">ลบ</button>
        </div>
      </div>
    </div>
  );
}