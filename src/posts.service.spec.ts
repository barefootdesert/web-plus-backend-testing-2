import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      const result = postsService.findMany();

      expect(result).toEqual([
        { id: '1', text: 'Post 1' },
        { id: '2', text: 'Post 2' },
        { id: '3', text: 'Post 3' },
        { id: '4', text: 'Post 4' },
      ]);
    });

    it('should return correct posts for skip and limit options', () => {
      const result = postsService.findMany({ skip: 1, limit: 2 });

      expect(result).toEqual([
        { id: '2', text: 'Post 2' },
        { id: '3', text: 'Post 3' },
      ]);
    });

    it('should return correct posts if only skip option is passed', () => {
      const result = postsService.findMany({ skip: 2 });

      expect(result).toEqual([
        { id: '3', text: 'Post 3' },
        { id: '4', text: 'Post 4' },
      ]);
    });

    it('should return correct posts if only limit option is passed', () => {
      const result = postsService.findMany({ limit: 2 });

      expect(result).toEqual([
        { id: '1', text: 'Post 1' },
        { id: '2', text: 'Post 2' },
      ]);
    });
  });
});