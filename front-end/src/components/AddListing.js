const AddListing = props => {
    const [input, setInput] = useState({
        user_id: localStorage.getItem('user_id'),
        roomtype: '',
        accommodates: 0,
        bathrooms: 0,
        city: '',
        latitude: 0,
        longitude: 0,
        bedrooms: 0,
        beds: 0,
        tv: 0,
        streetaddress: '',
        zipcode: 0
    });

    const onChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
        console.log(input);
    };



    const onSubmit = (event) => {
        event.preventDefault();
        console.log('input', input);
        props.addListing({
            user_id: localStorage.getItem('user_id'),
        roomtype: input.roomtype,
        accommodates: Number(input.accommodates),
        bathrooms:Number(input.bathrooms),
        city: input.city,
        latitude: Number(input.latitude),
        longitude: Number(input.longitude),
        bedrooms: Number(input.bedrooms),
        beds: Number(input.beds),
        tv: Number(input.tv),
        streetaddress: input.streetaddress,
        zipcode: Number(input.zipcode)
        });
    };

    return (
        <AddListingContainer>
 
        </AddListingContainer>
    );
};

export default connect(null, {toggleAddListingModal, addListing, getListings})(AddListing);