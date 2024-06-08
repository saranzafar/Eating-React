import { InfinitySpin } from 'react-loader-spinner';

function Loader({
    visibility = "false",
    color = "#c02cd3",
    width = "200" }) {
    return (
        <InfinitySpin
            visible={visibility}
            width={`${width}`}
            color={`${color}`}
            ariaLabel="infinity-spin-loading"
        />
    )
}

export default Loader
