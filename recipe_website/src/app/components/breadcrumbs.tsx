// components/Breadcrumbs.tsx

import Link from 'next/link';

interface BreadcrumbProps {
    items: { label: string; href: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
                        {index === items.length - 1 ? (
                            item.label
                        ) : (
                            <Link href={item.href} className="text-decoration-none breadcrumb-link">
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}