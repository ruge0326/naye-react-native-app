import {StatusBar, Text, View} from 'react-native';
import styled, {W} from 'src/libs/windstitch';
import {t} from 'src/utils';

const ContainerV = styled(View, {
  variants: {
    color: {
      violet: t`
        bg-violet-500
        hover:bg-violet-400
        dark:bg-violet-700
        dark:hover:bg-violet-600
        text-white
        dark:text-white
        ring-violet-400
      `,
    },
    size: {
      xs: t`px-1.5 py-0.5 rounded text-xs`,
      sm: t`px-2 py-1 rounded-md text-sm`,
      base: t`px-3 py-2 rounded-md text-base`,
      md: t`px-4 py-3 rounded-md text-lg`,
      lg: t`px-5 py-4 rounded-lg text-lg`,
      xl: t`px-6 py-5 rounded-lg text-xl`,
    },
  },
  defaultVariants: {
    size: 'base',
  },
  className: 'flex-1 items-center justify-center bg-blue-300',
});

export type NViewProps = W.Infer<typeof ContainerV>;

export const NView = () => (
  <ContainerV color="violet">
    <Text>
      {new Date().toLocaleString()}
      {' Love Coding'}
    </Text>
    <StatusBar />
  </ContainerV>
);
