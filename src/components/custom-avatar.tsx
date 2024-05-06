import { Avatar as AntdAvatar, AvatarProps} from 'antd';

type props = AvatarProps & {
  name?: string;


}
const CustomAvatar = ( {name, style, ...rest}: props) => {
  return (
    <AntdAvatar
    alt={'Dushimire Oscar'}
    size="small"
    style={{
      backgroundColor: '#87d068',
      display: 'flex',
      alignContent: 'center',
      border: 'none',
      ...style

    }}
    //{...rest}
    >
        {name}
    </AntdAvatar>
  )
}

export default CustomAvatar