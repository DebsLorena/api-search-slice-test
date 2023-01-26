import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />);

        expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', 'img/img.png');
        expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
    });

    // Erro no firstChild
    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />);
        // expect(container.firstChild).toMatchSnapshot();
            expect(container).toMatchSnapshot();
    });
});



// Criou se um outro componente mock.js e transferiu o objeto
// const mock = {
//     title: 'title 1',
//     body: 'body 1',
//     id: 1,
//     cover: 'img/img.png'
// };


// const props = postCardPropsMock

// describe('<PostCard />', () => {
//     it('shoul render PostCard correctly', () => {
//         render(<PostCard {...props} />);

        // const {debug} = render(<PostCard {...props} />);
    //     // debug();
    //     expect(screen.getByRole('img', {name: /title 1/i}))
    //     .toHaveAttribute('src', 'img/img.png');
    //     expect(screen.getByRole('heading', {name: 'title 1 1'}))
    //     .toBeInTheDocument();
    //     expect(screen.getByText('body 1'))
    //     .toBeInTheDocument();
    // });
