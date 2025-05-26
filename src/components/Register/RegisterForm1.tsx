import { FormEvent } from 'react';
import AutoCompleteInput from '../common/AutoCompleteInput';
import { useAutoComplete } from '../../hooks/useAutoComplete';
import {
  searchSchools,
  searchColleges,
  searchDepartments,
} from '../../api/registerApi';
import { School, Organization } from '../../types/types';

interface RegisterFormProps {
  onSubmit: (data: {
    school: School | null;
    college: Organization | null;
    department: Organization | null;
  }) => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const school = useAutoComplete<School>(searchSchools);
  const college = useAutoComplete<Organization>(
    (q) => searchColleges(school.selected?.id ?? 0, q),
    !school.selected
  );
  const department = useAutoComplete<Organization>(
    (q) => searchDepartments(college.selected?.id ?? 0, q),
    !college.selected
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      school: school.selected,
      college: college.selected,
      department: department.selected,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AutoCompleteInput label="학교" {...school} />
      <AutoCompleteInput label="단과대학" {...college} />
      <AutoCompleteInput label="학부" {...department} />

      <button
        type="submit"
        disabled={!school.selected || !college.selected || !department.selected}
        className="bg-gray4 text-white py-2 rounded-md transition"
      >
        학과 정보 입력 완료하기
      </button>
    </form>
  );
};

export default RegisterForm;