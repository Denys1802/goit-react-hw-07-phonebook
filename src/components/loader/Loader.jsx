import { Circles } from 'react-loader-spinner';

import { WrapLoader } from './Loader.styled';

export const Loader = ({
  heightLoader,
  widthLoader,
  colorLoader = '#ff0000',
}) => {
  return (
    <WrapLoader>
      <Circles
        height={widthLoader}
        width={heightLoader}
        color={colorLoader}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </WrapLoader>
  );
};
