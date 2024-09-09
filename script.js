// Inicializa Mermaid para renderizar el gráfico
mermaid.initialize({startOnLoad:true});

const diagram = `
graph TD
    %% Primer año
    A(Análisis Matemático I) --> B(Estadística I)
    A --> C(Teoría de las Decisiones)
    A --> D(Física I)
    A --> E(Análisis Matemático II)
    F(Lógica y Metodología de las Ciencias) --> G(Programación I)
    H(Fundamentos de Informática)
    I(Matemática Discreta) --> J(Algoritmos y Estructuras de Datos)
    I --> K(Técnicas Digitales)
    L(Álgebra) --> K
    L --> E
    D --> M(Física II)
    G --> N(Lenguajes Formales y Teoría de la Computación)
    G --> O(Programación II)
    G --> J
    P(Elementos de Administración) --> Q(Teoría de las Organizaciones)

    %% Segundo año
    O --> R(Arquitectura de Computadoras)
    O --> S(Programación III)
    O --> T(Redes I)
    O --> U(Base de Datos I)
    M --> R
    B --> V(Estadística II)
    B --> W(Sistemas de Información)
    X(Química) --> Y(Gestión Ambiental)
    E --> C
    E --> Z(Análisis Matemático III)
    E --> AA(Economía)
    V --> C
    V --> AB(Simulación de Sistemas)
    J --> S
    J --> U
    K --> R
    K --> T

    %% Tercer año
    Z --> AC(Análisis Numérico)
    Z --> T
    N --> AD(Sistemas Operativos)
    R --> AD
    S --> AE(Inteligencia Artificial)
    S --> AF(Metodologías de Diseño de Sistemas)
    T --> AG(Redes II)
    AD --> AH(Sega Informática) AC --> AB

    %% Cuarto año
    AA --> 
    W --> 
    U --> AI(Base de Datos II)
    AG --> AH
    AE --> 
    AF --> AJ(Ingeniería de Software)
    AF --> AK(Ingeniería Legal)
    AI --> AJ
    AH

    %% Quinto año
    AL(Práctica Profesional Supervisada)
    AJ
    AB
    C --> AM(Administración de RRHH)
    AN(Optativa I)
    AM
    AK
    AO(Trabajo de Grado en Ing. en Inf.)
    Y
    AP(Optativa II)`;

// Renderizar el diagrama en el contenedor de la página
 document.getElementById('diagram').innerHTML = mermaid.render('graphDiv', diagram);
