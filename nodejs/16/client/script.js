const fetchCompanies = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/company');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
fetchCompanies();
