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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-900">
        ทำเนียบสมาชิกสภาผู้แทนราษฎร
      </h1>

      <div className="max-w-4xl mx-auto mb-12">
        <MemberForm onSubmit={handleSubmit} initialData={editingMember || undefined} />
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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