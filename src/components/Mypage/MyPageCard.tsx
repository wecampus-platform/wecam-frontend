import { UserProfile } from '../../types/types';

type Props = {
  user: UserProfile;
};

function MyPageCard({ user }: Props) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-xs bg-white border rounded-lg shadow p-6 text-center">

        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
          <img
            src="/default-profile.png"
            alt="프로필"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-1">{user.username}</h2>

        <div className="text-sm text-gray-600 mb-0.5">{user.organizationHierarchyList[0] ?? '소속 없음'}</div>

        <div className="text-sm text-gray-600">
          {user.organizationHierarchyList[1] ?? '소속 없음'}
        </div>
      </div>
    </div>
  );
}

export default MyPageCard;
