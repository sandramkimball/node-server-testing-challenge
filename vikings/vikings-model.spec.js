const db = require('../data/dbConfig.js');
const {insert} = require('./vikings-model.js');

describe('vikings model', function() {
    describe('insert()', function() {

        beforeEach(async()=> {await db('vikings').truncate()});

        test('should insert a viking', async function(){
            await insert({name: 'Hastein'});
            const vikings = await db('vikings');
            expect(vikings).toHaveLength(11);
        });

        test('should return inserted viking', async function(){
            let viking = await insert({name: 'Hastein'});
            expect(viking.name).toBe('Hastein');
            expect(viking.id).toBeDefined();
        });
        
    });

    describe('remove()', function(){
        
        beforeEach(async()=> {await db('vikings').truncate()});

        test('should remove a viking', async function(){
            await delete({name: 'Ragnar Lodbrook'});
            const vikings = await db('vikings');
            expect(vikings).toHaveLength(10);
        });

        // test('should not return deleted viking', async function(){
        //     await delete({name: 'Ragnar Lodbrook'});
        //     const viking = await db({name:'Ragnar Lodbrook'});
        //     expect(viking).toBeUndefined();
            
        // })
    });

});