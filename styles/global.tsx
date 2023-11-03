import { Montserrat } from '@next/font/google';
import { COLORS } from '@/theme';

const montserrat = Montserrat({ subsets: ['latin'] });

const GlobalStyles = () => (
  <style jsx global>
    {`
      body {
        color: ${COLORS.DARKEST_GRAY};
      }
      body * {
        font-family: ${montserrat.style.fontFamily};
      }
      body a {
        text-decoration: none;
      }
    `}
  </style>
);

export default GlobalStyles;
