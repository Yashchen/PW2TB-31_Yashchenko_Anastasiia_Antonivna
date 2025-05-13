function calculateEmissions() {
    const coalMass = parseFloat(document.getElementById("coal").value);
    const mazutMass = parseFloat(document.getElementById("mazut").value);
    const gasVolume = parseFloat(document.getElementById("gas").value);

    // Коефіцієнти:
    const Gvin = 0.015;     // 1.5%
    const Gshl = 0.005;     // 0.5%
    const efficiency = 0.985;

    // Теплота згоряння:
    const Qcoal = 20.47;    // МДж/кг
    const Qmazut = 40.40;   // МДж/кг
    const Qgas = 33.08;     // МДж/м3

    // Розрахунок питомої емісії (г/ГДж)
    const kCoal = ((1 - Gvin - Gshl) * (1 - efficiency) * 1e6) / Qcoal;
    const kMazut = ((1 - efficiency) * 1e6) / Qmazut;
    const kGas = 0; // Газ не утворює твердих частинок

    // Розрахунок валових викидів (т)
    const ECoal = kCoal * coalMass * 1e-6;
    const EMazut = kMazut * mazutMass * 1e-6;
    const EGas = kGas * gasVolume * 1e-3; // тис. м3 → м3

    let resultText = `
        <p><strong>Результати розрахунку:</strong></p>
        <p>1. Показник емісії твердих частинок при спалюванні вугілля: ${kCoal.toFixed(2)} г/ГДж</p>
        <p>2. Валовий викид при спалюванні вугілля: ${ECoal.toFixed(2)} т</p>
        <p>3. Показник емісії твердих частинок при спалюванні мазуту: ${kMazut.toFixed(2)} г/ГДж</p>
        <p>4. Валовий викид при спалюванні мазуту: ${EMazut.toFixed(2)} т</p>
        <p>5. Показник емісії твердих частинок при спалюванні природного газу: ${kGas.toFixed(2)} г/ГДж</p>
        <p>6. Валовий викид при спалюванні природного газу: ${EGas.toFixed(2)} т</p>
    `;

    document.getElementById("result").innerHTML = resultText;
}

