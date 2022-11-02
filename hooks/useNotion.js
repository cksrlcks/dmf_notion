import useSWR from "swr";

const fetcher = async (url) => {
    const data = await fetch(url).then((res) => res.json());
    return data;
};

const usesDatabase = (url) => {
    const { data, error } = useSWR(url, fetcher);

    return {
        data,
        loading: !error && !data,
        error,
    };
};

export default usesDatabase;
