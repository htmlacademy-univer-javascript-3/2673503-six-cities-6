import ReviewList from '@/components/review-list/review-list.tsx';
import {Comment} from '@/types/api.ts';
import {useAppSelector} from '@/hooks/use-app-selector.tsx';
import {AuthorizationStatus} from '@/constants/auth-status.ts';
import ReviewForm from '@/components/review-form/review-form.tsx';

interface ReviewSectionProps {
  comments: Comment[];
}

export default function ReviewSection({comments}: ReviewSectionProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ReviewList comments={comments}/>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm/>}
    </section>
  );
}
