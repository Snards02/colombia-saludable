import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {
// Datos para los gráficos
  monthlyData = [
    { mes: 1, count: 980 },
    { mes: 2, count: 890 },
    { mes: 3, count: 1020 },
    { mes: 4, count: 950 },
    { mes: 5, count: 970 },
    { mes: 6, count: 960 },
    { mes: 7, count: 990 },
    { mes: 8, count: 985 },
    { mes: 9, count: 920 },
    { mes: 10, count: 480 },
    { mes: 11, count: 490 },
    { mes: 12, count: 430 }
  ];

  departmentData = [
    { departamento: 'Cundinamarca', casos: 5500 },
    { departamento: 'Boyacá', casos: 4600 }
  ];

  diseaseData = [
    { disease: 'COVID-19', count: 1720 },
    { disease: 'Varicela', count: 1680 },
    { disease: 'Gastroenteritis', count: 1660 },
    { disease: 'Dengue', count: 1640 },
    { disease: 'Chikungunya', count: 1620 },
    { disease: 'Influenza', count: 1600 }
  ];

  vaccinationData = [
    { disease: 'Gastroenteritis', none: 660, partial: 350, full: 480, boosted: 170 },
    { disease: 'Varicela', none: 670, partial: 350, full: 510, boosted: 170 },
    { disease: 'COVID-19', none: 700, partial: 350, full: 520, boosted: 170 },
    { disease: 'Chikungunya', none: 650, partial: 330, full: 490, boosted: 170 },
    { disease: 'Influenza', none: 660, partial: 330, full: 490, boosted: 150 },
    { disease: 'Dengue', none: 680, partial: 320, full: 470, boosted: 140 }
  ];

  correlationData = [
    { x: 'age', y: 'age', value: 1 },
    { x: 'age', y: 'mortality_rate_percent', value: 0.19 },
    { x: 'age', y: 'risk_score', value: 0.46 },
    { x: 'age', y: 'latitude', value: -0.0043 },
    { x: 'age', y: 'longitude', value: 0.00065 },
    { x: 'mortality_rate_percent', y: 'age', value: 0.19 },
    { x: 'mortality_rate_percent', y: 'mortality_rate_percent', value: 1 },
    { x: 'mortality_rate_percent', y: 'risk_score', value: 0.2 },
    { x: 'mortality_rate_percent', y: 'latitude', value: -0.026 },
    { x: 'mortality_rate_percent', y: 'longitude', value: -0.02 },
    { x: 'risk_score', y: 'age', value: 0.46 },
    { x: 'risk_score', y: 'mortality_rate_percent', value: 0.2 },
    { x: 'risk_score', y: 'risk_score', value: 1 },
    { x: 'risk_score', y: 'latitude', value: 0.00066 },
    { x: 'risk_score', y: 'longitude', value: 0.0033 },
    { x: 'latitude', y: 'age', value: -0.0043 },
    { x: 'latitude', y: 'mortality_rate_percent', value: -0.026 },
    { x: 'latitude', y: 'risk_score', value: 0.00066 },
    { x: 'latitude', y: 'latitude', value: 1 },
    { x: 'latitude', y: 'longitude', value: 0.75 },
    { x: 'longitude', y: 'age', value: 0.00065 },
    { x: 'longitude', y: 'mortality_rate_percent', value: -0.02 },
    { x: 'longitude', y: 'risk_score', value: 0.0033 },
    { x: 'longitude', y: 'latitude', value: 0.75 },
    { x: 'longitude', y: 'longitude', value: 1 }
  ];

  ngAfterViewInit() {
    // Cargar Plotly desde CDN y crear los gráficos
    this.loadPlotlyAndCreateCharts();
  }

  private loadPlotlyAndCreateCharts() {
    // Cargar Plotly desde CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/plotly.js/2.26.0/plotly.min.js';
    script.onload = () => {
      this.createAllCharts();
    };
    document.head.appendChild(script);
  }

  private createAllCharts() {
    this.createMonthlyChart();
    this.createDepartmentChart();
    this.createDiseaseDistributionChart();
    this.createAgeDistributionChart();
    this.createRiskDistributionChart();
    this.createVaccinationChart();
    this.createCorrelationChart();
    this.createScatterChart();
    this.createMortalityChart();
  }

  private createMonthlyChart() {
    const data = [{
      x: this.monthlyData.map(d => d.mes),
      y: this.monthlyData.map(d => d.count),
      type: 'bar',
      marker: { color: '#17a2b8' },
      name: 'Casos'
    }];

    const layout = {
      title: '',
      xaxis: { title: 'Mes' },
      yaxis: { title: 'Count' },
      plot_bgcolor: 'white',
      paper_bgcolor: 'white'
    };

    (window as any).Plotly.newPlot('monthlyChart', data, layout, {responsive: true});
  }

  private createDepartmentChart() {
    const data = [{
      y: this.departmentData.map(d => d.departamento),
      x: this.departmentData.map(d => d.casos),
      type: 'bar',
      orientation: 'h',
      marker: { color: '#28a745' },
      name: 'Casos'
    }];

    const layout = {
      title: '',
      xaxis: { title: 'Número de casos' },
      yaxis: { title: 'departamento' },
      plot_bgcolor: 'white',
      paper_bgcolor: 'white'
    };

    (window as any).Plotly.newPlot('departmentChart', data, layout, {responsive: true});
  }

  private createDiseaseDistributionChart() {
    const data = [{
      x: this.diseaseData.map(d => d.disease),
      y: this.diseaseData.map(d => d.count),
      type: 'bar',
      marker: { color: '#17a2b8' },
      name: 'Casos'
    }];

    const layout = {
      title: '',
      xaxis: { title: 'disease' },
      yaxis: { title: 'count' },
      plot_bgcolor: 'white',
      paper_bgcolor: 'white'
    };

    (window as any).Plotly.newPlot('diseaseDistributionChart', data, layout, {responsive: true});
  }

  private createAgeDistributionChart() {
    const diseases = ['Gastroenteritis', 'Varicela', 'COVID-19', 'Chikungunya', 'Influenza', 'Dengue'];
    const data = diseases.map(disease => ({
      y: this.generateBoxPlotData(),
      type: 'box',
      name: disease,
      boxpoints: 'outliers'
    }));

    const layout = {
      title: '',
      xaxis: { title: 'disease' },
      yaxis: { title: 'age' },
      plot_bgcolor: 'white',
      paper_bgcolor: 'white'
    };

    (window as any).Plotly.newPlot('ageDistributionChart', data, layout, {responsive: true});
  }

  private createRiskDistributionChart() {
    // Generar datos simulados para el histograma
    const riskData = this.generateRiskDistributionData();
    
    const data = [{
      x: riskData,
      type: 'histogram',
      nbinsx: 30,
      marker: { color: '#6c757d' },
      name: 'Distribución'
    }];

    // Agregar curva de distribución normal
    const x_curve = Array.from({length: 100}, (_, i) => i * 0.01);
    const y_curve = x_curve.map(x => this.normalCurve(x, 0.15, 0.1) * 8000);
    
    data.push({
      x: x_curve,
      y: y_curve,
      type: 'scatter',
      mode: 'lines',
      line: { color: 'black', width: 2 },
      name: 'Curva normal'
    } as any);

    const layout = {
      title: '',
      xaxis: { title: 'Riesgo' },
      yaxis: { title: 'Count' },
      plot_bgcolor: 'white',
      paper_bgcolor: 'white',
      showlegend: false
    };

    (window as any).Plotly.newPlot('riskDistributionChart', data, layout, {responsive: true});
  }

  private createVaccinationChart() {
    const data = [
      {
        x: this.vaccinationData.map(d => d.disease),
        y: this.vaccinationData.map(d => d.none),
        type: 'bar',
        name: 'none',
        marker: { color: '#17a2b8' }
      },
      {
        x: this.vaccinationData.map(d => d.disease),
        y: this.vaccinationData.map(d => d.partial),
        type: 'bar',
        name: 'partial',
        marker: { color: '#fd7e14' }
      },
      {
        x: this.vaccinationData.map(d => d.disease),
        y: this.vaccinationData.map(d => d.full),
        type: 'bar',
        name: 'full',
        marker: { color: '#28a745' }
      },
      {
        x: this.vaccinationData.map(d => d.disease),
        y: this.vaccinationData.map(d => d.boosted),
        type: 'bar',
        name: 'boosted',
        marker: { color: '#dc3545' }
      }
    ];

    const layout = {
      title: '',
      xaxis: { title: 'disease' },
      yaxis: { title: 'count' },
      barmode: 'stack',
      plot_bgcolor: 'white',
      paper_bgcolor: 'white'
    };

    (window as any).Plotly.newPlot('vaccinationChart', data, layout, {responsive: true});
  }

  private createCorrelationChart() {
    const variables = ['age', 'mortality_rate_percent', 'risk_score', 'latitude', 'longitude'];
    const zData = [];
    
    for (let i = 0; i < variables.length; i++) {
      const row = [];
      for (let j = 0; j < variables.length; j++) {
        const item = this.correlationData.find(d => d.x === variables[j] && d.y === variables[i]);
        row.push(item ? item.value : 0);
      }
      zData.push(row);
    }

    const data = [{
      z: zData,
      x: variables,
      y: variables,
      type: 'heatmap',
      colorscale: 'RdBu',
      reversescale: true,
      showscale: true
    }];

    const layout = {
      title: '',
      plot_bgcolor: 'white',
      paper_bgcolor: 'white',
      annotations: []
    };

    // Agregar anotaciones con los valores
    for (let i = 0; i < variables.length; i++) {
      for (let j = 0; j < variables.length; j++) {
        (layout.annotations as any).push({
          x: variables[j],
          y: variables[i],
          text: zData[i][j].toFixed(3),
          showarrow: false,
          font: { color: Math.abs(zData[i][j]) > 0.5 ? 'white' : 'black' }
        });
      }
    }

    (window as any).Plotly.newPlot('correlationChart', data, layout, {responsive: true});
  }

  private createScatterChart() {
    const ageRiskData0 = this.generateScatterData(0);
    const ageRiskData1 = this.generateScatterData(1);

    const data = [
      {
        x: ageRiskData0.age,
        y: ageRiskData0.risk,
        mode: 'markers',
        type: 'scatter',
        name: 'Foco 0',
        marker: { color: '#17a2b8', size: 4 }
      },
      {
        x: ageRiskData1.age,
        y: ageRiskData1.risk,
        mode: 'markers',
        type: 'scatter',
        name: 'Foco 1',
        marker: { color: '#fd7e14', size: 4 }
      }
    ];

    const layout = {
      title: '',
      xaxis: { title: 'age' },
      yaxis: { title: 'risk_score' },
      plot_bgcolor: 'white',
      paper_bgcolor: 'white'
    };

    (window as any).Plotly.newPlot('scatterChart', data, layout, {responsive: true});
  }

  private createMortalityChart() {
    const diseases = ['Gastroenteritis', 'Varicela', 'COVID-19', 'Chikungunya', 'Influenza', 'Dengue'];
    const data = diseases.map(disease => ({
      y: this.generateMortalityData(disease),
      type: 'box',
      name: disease,
      boxpoints: 'outliers',
      marker: { color: disease === 'COVID-19' ? '#17a2b8' : disease === 'Dengue' ? '#17a2b8' : '#17a2b8' }
    }));

    const layout = {
      title: '',
      xaxis: { title: 'disease' },
      yaxis: { title: 'mortality_rate_percent' },
      plot_bgcolor: 'white',
      paper_bgcolor: 'white'
    };

    (window as any).Plotly.newPlot('mortalityChart', data, layout, {responsive: true});
  }

  // Funciones auxiliares para generar datos simulados
  private generateBoxPlotData(): number[] {
    const data = [];
    for (let i = 0; i < 1000; i++) {
      data.push(Math.random() * 80 + 10); // Edades entre 10 y 90
    }
    return data;
  }

  private generateRiskDistributionData(): number[] {
    const data = [];
    for (let i = 0; i < 8000; i++) {
      // Generar distribución aproximadamente normal
      let sum = 0;
      for (let j = 0; j < 12; j++) {
        sum += Math.random();
      }
      data.push((sum - 6) * 0.1 + 0.15);
    }
    return data.filter(d => d >= 0 && d <= 1);
  }

  private normalCurve(x: number, mean: number, std: number): number {
    return Math.exp(-0.5 * Math.pow((x - mean) / std, 2)) / (std * Math.sqrt(2 * Math.PI));
  }

  private generateScatterData(foco: number): {age: number[], risk: number[]} {
    const age = [];
    const risk = [];
    
    for (let i = 0; i < 2000; i++) {
      const ageVal = Math.random() * 100;
      const riskVal = (ageVal / 100) * 0.6 + Math.random() * 0.3 + (foco * 0.1);
      age.push(ageVal);
      risk.push(Math.min(Math.max(riskVal, 0), 1));
    }
    
    return { age, risk };
  }

  private generateMortalityData(disease: string): number[] {
    const data = [];
    const baseRate = disease === 'COVID-19' ? 1.2 : disease === 'Dengue' ? 0.6 : 0.1;
    
    for (let i = 0; i < 1500; i++) {
      let mortality = Math.random() * baseRate;
      if (Math.random() < 0.1) { // 10% outliers
        mortality *= (2 + Math.random() * 3);
      }
      data.push(Math.min(mortality, 3));
    }
    return data;
  }
}