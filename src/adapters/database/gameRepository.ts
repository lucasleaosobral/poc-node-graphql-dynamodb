import {dynamoDB} from "./dynamodbClient";

const tableName = 'Games';


const gameRepository = {
    getAll: async () => {
        const params = {
            TableName: tableName,
        };

        try {
            const data = await dynamoDB.scan((params)).promise();
            return data;
        }catch (error) {
            console.error('Erro ao buscar todos os jogos:', error);
            throw new Error('Erro ao buscar todos os jogos');
        }
    },
    getById: async (id: string) => {
        const params = {
            TableName: tableName,
            Key: {
                id: id
            }
        };

        try {
            const data = await dynamoDB.get(params).promise();
            return data.Item;
        } catch (error) {
            console.error('Erro ao buscar jogo por ID:', error);
            throw new Error('Erro ao buscar jogo por ID');
        }
    },
    delete: async(id: string) => {
        const params = {
            TableName: tableName,
            Key: {
                id: id,
            },
        };

        try {
            await dynamoDB.delete(params).promise();
            return id;
        } catch (error) {
            console.error('Erro ao deletar jogo:', error);
            throw new Error('Erro ao deletar jogo');
        }
    },

    create: async (game: any ) => {
        const id = Date.now().toString();

        if (typeof game.platform === 'string') {
            game.platforms = [game.platform];
        }

        const params = {
            TableName: tableName,
            Item: {
                id: id,
                title: game.title,
                platform: game.platform,
            },
        };

        try {
            await dynamoDB.put(params).promise();
            return params.Item;
        } catch (error) {
            console.error('Erro ao criar jogo:', error);
            throw new Error('Erro ao criar jogo');
        }
    },
    update: async(id: String, edits: any ) => {

        if (typeof edits.platform === 'string') {
            edits.platforms = [edits.platform];
        }

        const params = {
            TableName: tableName,
            Key: {
                id: id,
            },
            UpdateExpression: 'SET #title = :title, #platform = :platform',
            ExpressionAttributeNames: {
                '#title': 'title',
                '#platform': 'platform'
            },
            ExpressionAttributeValues: {
                ':title':  edits.title ,
                ':platform': edits.platform
            },
            ReturnValues: 'ALL_NEW'
        };

        try {
            const data = await dynamoDB.update(params).promise();

            return data.Attributes;

        } catch (error) {
            console.error('Erro ao atualizar jogo:', error);
            throw new Error('Erro ao atualizar jogo');
        }

    }

}


export {gameRepository}