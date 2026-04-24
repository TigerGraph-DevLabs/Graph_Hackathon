import { SITE } from '@/lib/site.config';

export default function RegisterButton({ className = 'btn btn-primary', children = 'Register on Unstop →', ...rest }) {
  return (
    <a href={SITE.unstopUrl} target="_blank" rel="noopener" className={className} {...rest}>
      {children}
    </a>
  );
}
