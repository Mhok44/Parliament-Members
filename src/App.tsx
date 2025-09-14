import { useState } from "react";
import MemberForm from "./components/MemberForm";
import MemberCard from "./components/MemberCard";
import type { Member } from "./types/Member";

export default function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [editingMember, setEditingMember] = useState<Member | null>(null);

  const handleSubmit = (data: Member) => {
    if (editingMember) {
      setMembers(members.map(m => m.id === data.id ? data : m));
      setEditingMember(null);
    } else {
      setMembers([...members, data]);
    }
  };

  const handleEdit = (member: Member) => {
    setEditingMember(member);
  };

  const handleDelete = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">ทำเนียบสมาชิกสภาผู้แทนราษฎร</h1>

      <MemberForm onSubmit={handleSubmit} initialData={editingMember || undefined} />

      <div className="grid gap-4">
        {members.map(member => (
          <MemberCard
            key={member.id}
            member={member}
            onEdit={() => handleEdit(member)}
            onDelete={() => handleDelete(member.id)}
          />
        ))}
      </div>
    </div>
  );
}