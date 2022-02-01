export interface DomainInput {
    kind: string,
    name: string
}

export interface Domain {
    hucs: number[],
    id: number,
    inputs: DomainInput[],
    name: string,
    username: string
}

export const ParseDomainQueryData = (domainData : any) => {
    //Check that data exists in request data
    if (!domainData || !domainData.data || !Array.isArray(domainData.data)) {
        return undefined;
    }

    //Create empty array
    let newDomainArray : Domain[] = [];

    //Create list of domains and append to list
    domainData.data.forEach((domain : any) => {
        let newDomain : Domain = {...domain};
        newDomainArray.push(newDomain);
    })

    //return domain list
    console.log(newDomainArray);
    return newDomainArray;
}