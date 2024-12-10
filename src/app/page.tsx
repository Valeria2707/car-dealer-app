import FilterFormContent from '@/components/FilterForm';
import { Suspense } from 'react';

export default function FilterForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FilterFormContent />
    </Suspense>
  );
}
