export function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'px-4 py-2 rounded-xl text-white';
  const styles = variant === 'outline' ? 'border border-white' : 'bg-indigo-600';
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}