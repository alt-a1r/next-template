import styled from 'styled-components';
import { Modal as AntdModal } from 'antd';
import { CheckCircleIcon, PlusCircleIcon } from '@/icons';
import { COLORS, DEVICES, pickThemeFontStyles } from '@/theme';

export const StyledMessageModal = styled(AntdModal)`
  & .ant-modal-body {
    padding: 4rem 2.5rem;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    min-width: 34.25rem;

    & .ant-modal-body {
      padding: 4rem;
    }
  }
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 1.5rem;

  @media screen and ${DEVICES.LAPTOP_S} {
    gap: 2rem;
  }
`;

export const StyledSuccessIcon = styled(CheckCircleIcon)`
  font-size: 6.25rem;
  color: ${COLORS.BLUE_PRIMARY};
`;

export const StyledErrorIcon = styled(PlusCircleIcon)`
  transform: rotate(45deg);
  font-size: 6.25rem;
  color: ${COLORS.RED};
`;

export const StyledMessage = styled.div`
  ${pickThemeFontStyles('24', '30', 'SEMI_BOLD')};

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('30', '40', 'SEMI_BOLD')};
  }
`;

export const StyledAdditionalMessage = styled.div`
  ${pickThemeFontStyles('14', '20', 'SEMI_BOLD')};
  color: ${COLORS.DARK_GRAY};

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('18', '22', 'SEMI_BOLD')};
  }
`;

export const StyledBottomMessageMessage = styled.div`
  ${pickThemeFontStyles('12', '18', 'SEMI_BOLD')};
  color: ${COLORS.DARK_GRAY};

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('14', '20', 'SEMI_BOLD')};
  }
`;
