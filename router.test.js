const request = require('supertest');
const app = require('./app');
const route = require('./router');

describe('request test', () => {
  it('Test the root path', async (done) => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    done();
  });

  it('text get method test', async (done) => {
    const response = await request(app).get('/text');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("TEXT");
    done();
  });

  it('object get method test', async (done) => {
    const response = await request(app).get('/info');
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual(JSON.stringify({
      'Company Name': 'tmaxSoft',
      'Team Name': 'pas1'
    }));
    done();
  });
});
it('1+1', () => {
  expect(1 + 1).toBe(2);
})
describe('request & db query test', () => {
  it('select query test', async (done) => {
    const response = await request(app).get('/title');
    expect(response.text).toEqual(JSON.stringify({
      'TITLE': '제목'
    }));
    done();
  })
  it('queryString이 있는 select query test', async (done) => {
    const response = await request(app).get('/select?IDX=2');
    expect(response.text).toEqual(JSON.stringify({
      'TITLE': 'test'
    }));
    done();
  })
  it('insert query test', async (done) => {
    let random = Math.floor(Math.random() * 100) + 1;
    const response = await request(app).post('/insert').send({
      title: 'TmaxSoft' + random,
      contents: random,
      crea_id: 'Admin'
    });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("1");
    done();
  })
})