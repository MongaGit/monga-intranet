const BASE_URL = 'http://localhost:3000';

async function startDockerCompose(token) {
    try {
        const response = await fetch(`${BASE_URL}/docker-compose`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao iniciar o docker-compose');
        }

        console.log('Docker-compose iniciado com sucesso');
    } catch (error) {
        console.error(error);
    }
}

export { startDockerCompose };
