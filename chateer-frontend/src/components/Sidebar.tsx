import * as React from "react";

interface Contact {
  id: number;
  name: string;
}

interface SidebarProps {
  contacts: Contact[];
  onSelect: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ contacts, onSelect }: SidebarProps) => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">Contacts</h2>
      <ul>
        {contacts.map((contact: Contact) => (
          <li
            key={contact.id}
            onClick={() => onSelect(contact.id)}
            className="p-2 hover:bg-gray-200 cursor-pointer rounded-md"
          >
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
