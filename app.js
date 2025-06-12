
document.addEventListener("DOMContentLoaded", () => {
    const gridDiv = document.querySelector("#myGrid");
    const addBtn = document.querySelector("#addFraccionamientosBtn");

    // Modal elements
    const detailsModal = document.getElementById("detailsModal");
    const closeButton = detailsModal.querySelector(".close-button");
    const modalNombre = document.getElementById("modalNombre");
    // const modalInicioConvenio = document.getElementById("modalInicioConvenio");
    const modalFinConvenio = document.getElementById("modalFinConvenio");
    const modalEstatus = document.getElementById("modalEstatus");
    const modalPdfLink = document.getElementById("modalPdfLink");
    const modalObservaciones = document.getElementById("modalObservaciones");

    const staticData = [
        {
            id: 1,
            nombre: "Casa Fuerte",
            categoria: "vigente",
            fecha_fin_convenio: "2027-05-15",
            pdf_convenio_path: "documents/casa-fuerte.pdf",
            observaciones: "Casa fuerte convenio de colaboracion vigente hasta 2027, con opcion de solicitar prorroga",
            autosuficiente: true
        },
        {
            id: 2,
            nombre: "Colinas de Cajititlan",
            categoria: "irregular",
            fecha_fin_convenio: "2018-01-01",
            pdf_convenio_path: null,
            observaciones: "Según últimos registros, hay acta de acuerdo, para entrega recepción del 2006. Menciona que se entrega la infraestructura de agua y drenaje, no tienen título de pozo. El 5 de diciembre de 2023 se presentó a secretaria general solicitud para convenio de colaboración. No hubo más actualización desde entonces.",
            autosuficiente: false
        },
        {
            id: 3,
            nombre: "Bosque Real",
            categoria: "vigente",
            fecha_fin_convenio: "2031-01-01",
            pdf_convenio_path: "documents/bosque-real.pdf",
            observaciones: "Convenio vigente hasta 2027",
            autosuficiente: true
        },
        {
            id: 4,
            nombre: "Senderos de Monteverde",
            categoria: "vigente",
            fecha_fin_convenio: "2027-01-01",
            pdf_convenio_path: "documents/senderos-de-monteverde.pdf",
            observaciones: "Convenio vigente hasta 2027",
            autosuficiente: true
        },
        {
            id: 4,
            nombre: "Senderos de Monteverde",
            categoria: "vigente",
            fecha_fin_convenio: "2027-01-01",
            pdf_convenio_path: "documents/senderos-de-monteverde.pdf",
            observaciones: "Convenio vigente hasta 2027",
            autosuficiente: true
        },
        {
            id: 4,
            nombre: "Valle de las Flores",
            categoria: "vigente",
            fecha_fin_convenio: "2026-01-01",
            pdf_convenio_path: "documents/valle-de-las-flores.pdf",
            observaciones: "Convenio vigente hasta 2026",
            autosuficiente: true
        },
        {
            id: 4,
            nombre: "Lomas de Santa Anita",
            categoria: "en proceso",
            fecha_fin_convenio: "2025-02-28",
            pdf_convenio_path: null,
            observaciones: "Convenio vencido en Febrebro de 2025",
            autosuficiente: false
        },
        {
            id: 4,
            nombre: "Acueducto San Agustin",
            categoria: "irregular",
            fecha_fin_convenio: null,
            pdf_convenio_path: null,
            observaciones: "Convenio vigente hasta 2027",
            autosuficiente: true
        },
        {
            id: 4,
            nombre: "Bosques de Santa Anita",
            categoria: "vigente",
            fecha_fin_convenio: "2027-01-01",
            pdf_convenio_path: "documents/bosques-de-santa-anita.pdf",
            observaciones: "Convenio de colaboracion vigente hasta 2027.",
            autosuficiente: true
        },
        {
            id: 4,
            nombre: "Condominio Siglo XXI",
            categoria: "vigente",
            fecha_fin_convenio: "2040-01-01",
            pdf_convenio_path: "documents/siglo-XXI.pdf",
            observaciones: "Concesion vigente hasta 2040",
            autosuficiente: true
        },
        {
            id: 4,
            nombre: "Tres Retes Cajititlan",
            categoria: "en proceso",
            fecha_fin_convenio: "2018-01-01",
            pdf_convenio_path: null,
            observaciones: "Convenio de colaboracion vencdio en 2018",
            autosuficiente: false
        },
        {
            id: 4,
            nombre: "La Noria de los Reyes",
            categoria: "en proceso",
            fecha_fin_convenio: "2018-01-01",
            pdf_convenio_path: null,
            observaciones: "Convenio de colaboracion vencdio en 2018",
            autosuficiente: false
        },
        {
            id: 4,
            nombre: "Pedregal San Miguel",
            categoria: "en proceso",
            fecha_fin_convenio: "2018-01-01",
            pdf_convenio_path: null,
            observaciones: "Concesion vigente hasta 2040",
            autosuficiente: false
        },
        {
            id: 4,
            nombre: "San Remo",
            categoria: "irregular",
            fecha_fin_convenio: null,
            pdf_convenio_path: null,
            observaciones: "Concesion vigente hasta 2040",
            autosuficiente: false
        },
        {
            id: 4,
            nombre: "El Cielo Palomar",
            categoria: "irregular",
            fecha_fin_convenio: null,
            pdf_convenio_path: null,
            observaciones: "No tiene concesión o convenio, es un convenio con México inversiones. Según los últimos registros, el municipio no presta el servicio. Tienen título de pozo, pero a nombre de México inversiones. En junio de 2026 se vence convenio para tomar aguas residuales y tratarlas para regar el club de golf El Cielo.",
            autosuficiente: false
        },
        {
            id: 4,
            nombre: "Balcones de la Calera",
            categoria: "irregular",
            fecha_fin_convenio: null,
            pdf_convenio_path: null,
            observaciones: "El agua es administrada por el desarrollador, no tiene redes de drenaje. Según últimos registros, no quieren entregar el título de pozo al municipio para que sea concesión.",
            autosuficiente: false
        },
        {
            id: 4,
            nombre: "Acueducto San Javier",
            categoria: "irregular",
            fecha_fin_convenio: null,
            pdf_convenio_path: null,
            observaciones: "Según últimos registros, el estado de este fraccionamiento es irregular, el agua es administrada por condominio, alcantarillado a cargo del municipio. No hay información de si cuentan con título de pozo.",
            autosuficiente: false
        },
        {
            id: 4,
            nombre: "Adamar",
            categoria: "irregular",
            fecha_fin_convenio: null,
            pdf_convenio_path: null,
            observaciones: "Según últimos registros, se hizo entrega recepción, condicionado a dos años de transición, donde se hará cargo el desarrollador del servicio. El municipio cobra por estar recepcionado. El agua lo opera el fraccionador. De la etapa 1 y 2 se conectan al alcantarillado del municipio. De la etapa 3 a la 9 tienen planta de tratamiento.",
            autosuficiente: false
        },
        {
            id: 4,
            nombre: "Alberi Residencial",
            categoria: "entregado",
            fecha_fin_convenio: null,
            pdf_convenio_path: null,
            observaciones: "Fraccionamiento entregado el 22 de abril de 2022. No tiene convenio ni concesión. El agua está a cargo del municipio, pero el drenaje estaba a cargo del desarrollador; contaban con planta de tratamiento. Se recibe en 2022 y se dictamina cobrar todos los servicios. Las aperturas de cuenta de agua quedan con fecha de la solicitud.",
            autosuficiente: false
        }
    ];


    // HELPER FUNCTIONS
    //format column dates
    const formatDate = (dateString) => {
      if(!dateString){
        return '';
      }
      const date = new Date(dateString);

      if(isNaN(date.getTime())){
        return dateString;
      }

      return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    };


    //PDF render
    const pdfLinkCellRenderer = (params) => {
      // params.value will be the path, e.g., "/documents/test-convenio.pdf"
      const pdfPath = params.value;
  
      if (!pdfPath) {
        return 'No PDF existente'; // Return empty string if no path is provided
      }
  
      // Create an anchor element
      const linkElement = document.createElement('a');
      linkElement.href = pdfPath; // Set the href to the PDF path
      linkElement.target = '_blank'; // Open in a new tab
      linkElement.textContent = 'Ver PDF'; // Text to display in the link (e.g., "View PDF")
      linkElement.style.textDecoration = 'underline'; // Add underline for link appearance
      linkElement.style.color = 'blue'; // Make it blue like a link
  
      // Optional: Add a title for hover effect
      linkElement.title = `Abrir: ${pdfPath}`;
  
      // Return the DOM element
      return linkElement;
    };


    // Modal observations
    const observationsCellRenderer = (params) => {
      const observations = params.value;
      const cellDiv = document.createElement('div');
      cellDiv.style.cursor = 'pointer'; // Indicate it's clickable
      // cellDiv.style.textDecoration = 'underline';
      cellDiv.style.color = '#757575';
      cellDiv.style.fontWeight = 'bold';
      cellDiv.classList.add('observButton');
  
      // Display a truncated version or a "Click to view" message
      const displayValue = observations && observations.length > 50
        ? observations.substring(0, 47) + '...' // Truncate long observations
        : observations || 'Ver Detalles'; // If null/empty, show "Ver Detalles"
  
      cellDiv.textContent = displayValue;
      cellDiv.title = 'Click para ver detalles completos'; // Tooltip
  
      // Attach click event listener
      cellDiv.addEventListener('click', () => {
        // Access the full row data from params.data
        showDetailsModal(params.data);
      });
  
      return cellDiv;
    };


    // Show modal with data
    const showDetailsModal = (data) => {
      modalNombre.textContent = data.nombre || 'N/A';
      // modalInicioConvenio.textContent = formatDate(data.fecha_inicio_convenio);
      modalFinConvenio.textContent = formatDate(data.fecha_fin_convenio);
      modalEstatus.textContent = data.tiene_convenio ? 'Activo' : 'Inactivo';
  
      // Handle PDF link within modal
      if (data.pdf_convenio_path) {
        const existingLink = modalPdfLink.querySelector('a');
        if (existingLink) modalPdfLink.removeChild(existingLink); // Remove old link if any
        const link = document.createElement('a');
        link.href = data.pdf_convenio_path;
        link.target = '_blank';
        link.textContent = 'Abrir PDF';
        modalPdfLink.appendChild(link);
      } else {
        modalPdfLink.textContent = 'N/A';
        const existingLink = modalPdfLink.querySelector('a'); // Clear old link if no new one
        if (existingLink) modalPdfLink.removeChild(existingLink);
      }
  
      modalObservaciones.textContent = data.observaciones || 'Sin observaciones adicionales.';
  
      detailsModal.style.display = "flex"; // Use flex to center with CSS
    };


    // --- NEW: Function to close the modal ---
    const closeDetailsModal = () => {
      detailsModal.style.display = "none";
    };

    // --- NEW: Event listeners for closing modal ---
    closeButton.addEventListener('click', closeDetailsModal);
    // Close when clicking outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target == detailsModal) {
        closeDetailsModal();
      }
    });


    // Autosuficiente format

    // const formatAuto = (params) => {
    //   if(params == 0){
    //     console.log('param seen');
    //   }
    // }
    const autosuficienteCellRenderer = (params) => {
      const cellValue = params.value === 1 || params.value === true;
      
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = cellValue;
      checkbox.disabled = true; // Make it read-only
      
      container.appendChild(checkbox);
      return container;
    };





  
    // Define column definitions
    const columnDefs = [
        {
            headerName: 'Nombre',
            field: 'nombre',
            filter: 'agTextColumnFilter'
        },
        {
            headerName: 'Categoria',
            field: 'categoria',
            filter: 'agTextColumnFilter',
            cellStyle: params => {
              switch (params.value) {
                case 'vigente': return { backgroundColor: '#e6f7e6', color: '#000' };
                case 'en proceso': return { backgroundColor: '#fffae6', color: '#000' };
                case 'irregular': return { backgroundColor: '#f2f2f2', color: '#000' };
                default: return {};
              }
            }
        },
        // {
        //     headerName: 'Convenio / inicio',
        //     field: 'fecha_inicio_convenio',
        //     valueFormatter: (params) => formatDate(params.value),
        //     filter: 'agTextColumnFilter'
        // },
        {
            headerName: 'Vigencia de Convenio',
            field: 'fecha_fin_convenio',
            valueFormatter: (params) => formatDate(params.value)
        },
        {
            headerName: 'PDF',
            field: 'pdf_convenio_path',
            editable: false,
            cellRenderer: pdfLinkCellRenderer,
        },
        {
          headerName: 'Observaciones',
          field: 'observaciones',
          editable: true,
          cellRenderer: observationsCellRenderer,
        },
        {
          headerName: 'Autosuficiente',
          field: 'autosuficiente',
          cellRenderer: autosuficienteCellRenderer, // Use the custom renderer
          // Or if you prefer text representation:
          // valueFormatter: (params) => params.value ? 'Sí' : 'No',
          filter: 'agBooleanColumnFilter', // Enable boolean filtering
          filterParams: {
            cellRenderer: autosuficienteCellRenderer // Optional: show checkboxes in filter
          }
        },
    ];
  
    // Function to fetch data and initialize the grid
    // const API_BASE = window.location.origin;
    // async function initializeGrid() {
    //   let rowData = [];
    //   try {
    //     // Replace with your actual backend endpoint
    //     // Using JSONPlaceholder for a public example
    //     const response = await fetch(`${API_BASE}/api/fraccionamientos`);
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     rowData = await response.json();
    //     // console.log("Fetched data:", rowData);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //     // Optionally, display an error message in the grid or console
    //     alert("Failed to load data. Check console for details.");
    //   }
  
      
    //   // Initialize the grid once the DOM is ready and data is (potentially) fetched
    //   // ag-Grid expects a DOM element and an options object
    // }



    // Grid Options
    const gridOptions = {
      columnDefs: columnDefs,
      rowData: staticData, // Set the fetched data here
      // You can add more grid options here, e.g., pagination, sorting, filtering
      pagination: true,
      paginationPageSize: 10,
      suppressRowClickSelection: true, // Example: disable row selection on click
      // Other options like:
      defaultColDef: {
        flex: 1,
        minWidth: 100,
      },
    };
    agGrid.createGrid(gridDiv, gridOptions);
  
    // Call the function to initialize the grid
    // initializeGrid();
  });