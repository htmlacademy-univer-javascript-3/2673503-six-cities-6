import {SPINNER_URL} from '@/constants/api-settings.ts';

export default function Spinner() {
  return (
    <img style={{textAlign: 'center'}} src={SPINNER_URL} alt="loading..."/>
  );
}
