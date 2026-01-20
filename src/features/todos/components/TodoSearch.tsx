import { Input } from "@/components/ui/input";

export function TodoSearch({
  handleSearch,
}: {
  handleSearch: (query: string) => void;
}) {
  return (
    <Input
      placeholder="Search todos..."
      onChange={(e) => handleSearch(e.target.value)}
      className="mb-2"
    />
  );
}
