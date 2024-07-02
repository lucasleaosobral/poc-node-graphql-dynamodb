import {gameRepository} from "../../database/gameRepository";

const gameResolver = {
    Query: {
        games: async () => {

            const data = await gameRepository.getAll();

            const itens = data.Items?.map(item => ({
                id: item.id,
                title: item.title,
                platform: item.platform,
            }));

            return itens;
        },
        game: async (_: any, args: { id: string }) => {

            const data = await gameRepository.getById(args.id);

            return data;
        }
    },
    Mutation: {
        async deleteGame(_: any, args : {id: string}) {
            const data = await gameRepository.delete(args.id);
            return data;
        },

        async addGame(_ : any, {game}: any ) {
            const data = await  gameRepository.create(game);
            return data;
        },
        async updateGame(_ : any, {id, edits } : any) {
            const data = await  gameRepository.update(id, edits);
            return data;
        }
    }
}

export {gameResolver}