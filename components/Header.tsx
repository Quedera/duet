import Link from "next/link";
import type { ProductName } from "@/lib/brand";
import { QuederaIdentity } from "./QuederaIdentity";

interface HeaderProps {
  product: ProductName | "QUEDERA";
}

/**
 * Brand-locked header with the brushed-steel QuederaIdentity capsule
 * (Single Source Brief §2-§5 reference). QuederaIdentity resolves the
 * product icon internally via the PRODUCT_ICONS map, so this component
 * just passes the product key.
 */
export function Header({ product }: HeaderProps) {
  return (
    <header className="border-b border-quedera-navy/10 bg-quedera-surface">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="block">
          <QuederaIdentity product={product} />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-semibold tracking-wider">
          <Link
            href="/brand-kit"
            className="text-quedera-navy hover:text-quedera-emerald"
          >
            BRAND KIT
          </Link>
        </nav>
      </div>
    </header>
  );
}
