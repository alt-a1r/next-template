import { Skeleton as AntdSkeleton, SkeletonProps } from 'antd';

type ISkeleton = SkeletonProps;

const Skeleton = (props: ISkeleton) => <AntdSkeleton {...props} />;

export default Skeleton;
