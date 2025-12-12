export const getRepository = async (repo) => {
    const response = await fetch(
        `https://api.github.com/repos/lucasearom/${repo}`
    );
    const data = await response.json();
    return data;
};
