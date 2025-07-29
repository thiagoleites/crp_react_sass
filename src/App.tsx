import React from 'react';

function App() {
    return (
        <main>
            <div className="container">
                <header className="mb-4">
                    <h1 className="text-xxl">FrameworkCSS - Showcase</h1>
                    <p className="text-md text-muted">Demonstração de grids, inputs, botões, tipografia e layout</p>
                </header>

                {/* Grid System */}
                <section className="mb-5">
                    <h2 className="text-xl mb-2">Grid System</h2>
                    <div className="row">
                        <div className="col-4 bg-light p-2">Col 4</div>
                        <div className="col-4 bg-gray p-2">Col 4</div>
                        <div className="col-4 bg-dark p-2 text-white">Col 4</div>
                    </div>
                </section>

                {/* Tipografia */}
                <section className="mb-5">
                    <h2 className="text-xl mb-2">Tipografia</h2>
                    <p className="text-sm">Texto pequeno</p>
                    <p className="text-md">Texto médio</p>
                    <p className="text-lg">Texto grande</p>
                    <p className="text-xl">Texto extra grande</p>
                </section>

                {/* Formulário */}
                <section className="mb-5">
                    <h2 className="text-xl mb-2">Formulário</h2>
                    <form className="form">
                        <div className="form-group mb-3">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" className="input" placeholder="Digite seu nome" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="input" placeholder="Digite seu e-mail" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="select">Escolha uma opção</label>
                            <select id="select" className="select">
                                <option value="">Selecione</option>
                                <option value="1">Opção 1</option>
                                <option value="2">Opção 2</option>
                            </select>
                        </div>
                        <button type="submit" className="button">Enviar dados</button>
                    </form>
                </section>

                {/* Utilitários */}
                <section className="mb-5">
                    <h2 className="text-xl mb-2">Utilitários</h2>
                    <div className="p-3 bg-light mb-2">Padding e fundo claro</div>
                    <div className="p-3 m-2 bg-gray">Padding e margem</div>
                    <div className="p-3 border">Borda padrão</div>
                </section>
            </div>
        </main>
    );
}

export default App;
