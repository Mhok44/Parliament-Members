import type { Member  } from "../types/Member";

type Props = {
  member: Member;
  onEdit: () => void;
  onDelete: () => void;
};

export default function MemberCard({ member, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white shadow rounded p-4 flex gap-4">
      <img src={member.photo} alt={`${member.firstName} ${member.lastName}`} className="w-24 h-24 object-cover rounded"/>
      <div className="flex-1">
        <h2 className="text-lg font-bold">{member.title} {member.firstName} {member.lastName}</h2>
        {member.career && <p><strong>ประวัติ:</strong> {member.career}</p>}
        {member.achievements && <p><strong>ผลงาน:</strong> {member.achievements}</p>}
        {(member.ministerPosition || member.ministry) && <p><strong>ตำแหน่ง:</strong> {member.ministerPosition} {member.ministry}</p>}
        {member.party && <p><strong>พรรค:</strong> {member.party}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={onEdit} className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500">แก้ไข</button>
        <button onClick={onDelete} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">ลบ</button>
      </div>
    </div>
  );
}
