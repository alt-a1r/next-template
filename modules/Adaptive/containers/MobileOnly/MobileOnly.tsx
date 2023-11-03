import { useIsMobile } from '../../hooks';

interface IDesktopOnly {
  children: JSX.Element;
}
const MobileOnly = ({ children }: IDesktopOnly): JSX.Element | null => {
  const { isMobile } = useIsMobile();
  return isMobile ? children : null;
};

export default MobileOnly;
