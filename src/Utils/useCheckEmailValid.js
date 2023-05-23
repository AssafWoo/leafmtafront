const useCheckEmailValid = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

export default useCheckEmailValid;