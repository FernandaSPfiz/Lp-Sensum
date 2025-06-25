import { ReactNode } from "react";
import "../styles/card.css";

interface CardProps {
  title: string;
  content: string;
  icon: string;
  children?: ReactNode;
}

export default function Card({ title, content, icon }: CardProps) {
  return (
    <article className="card">
      <div className="card-icon-wrapper">
        <img 
          src={icon} 
          alt={`Ícone ${title}`} 
          className="card-icon"
          width={64}
          height={64}
        />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </article>
  );
}