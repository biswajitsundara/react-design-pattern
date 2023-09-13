const PrintProps = (Component) => {
    return ( props ) => {
        console.log(props);
        return <Component {...props} />
    }
}
 
export default PrintProps;