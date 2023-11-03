import { useIsMobile } from '../../hooks';

interface IDesktopOnly {
  children: JSX.Element;
}
const DesktopOnly = ({ children }: IDesktopOnly): JSX.Element | null => {
  const { isMobile } = useIsMobile();
  return isMobile ? null : children;
};

export default DesktopOnly;
