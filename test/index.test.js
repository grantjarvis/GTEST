const LambdaTester = require('lambda-tester');
const expect = require('chai').expect;

// Lambda handler
const myHandler = require( '../index' ).handler;

describe( 'handler', function() {
  it( 'Test getAll', function() {
    return LambdaTester( myHandler )
      .event( { operation: 'getAll' } )
      .expectResult((result) => {
        expect(result.message).to.equal('Code some business logic.');
      });
  });
  it( 'Test getOne', function() {
    return LambdaTester( myHandler )
      .event( { operation: 'getOne', id: '1' } )
      .expectResult((result) => {
        expect(result.message).to.equal('This is the getOne function for 1');
      });
  });
  it( 'Test createOne', function() {
    return LambdaTester( myHandler )
      .event( { operation: 'createOne', body: { hello: 'world'}} )
      .expectResult((result) => {
        expect(result.message).to.equal('This is the createOne function to create an item');
      });
  });
  it( 'Test updateOne', function() {
    return LambdaTester( myHandler )
      .event( { operation: 'updateOne', id: '1', body: { hello: 'world'} } )
      .expectResult((result) => {
        expect(result.message).to.equal('This is the updateOne function to update item 1');
      });
  });
  it( 'Test deleteOne', function() {
    return LambdaTester( myHandler )
      .event( { operation: 'deleteOne', id: '1'} )
      .expectResult((result) => {
        expect(result.message).to.equal('This is the deleteOne function to delete item 1');
      });
  });
});
