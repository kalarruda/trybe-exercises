from abc import ABC, abstractmethod
from csv import DictWriter
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    @abstractmethod
    def get_length(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)

    def get_length(self):
        return 4


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file + 'csv', 'w') as file:
            headers = ['Coluna 1', 'Coluna 2', 'Coluna 3']
            csv_escrever = DictWriter(file, headers)
            csv_escrever.writeheader()
            for item in self.build():
                csv_escrever.writerow(item)


# Para testar
relatorio_de_vendas = SalesReportJSON('meu_relatorio')
relatorio_de_vendas.serialize()

relatorio_de_vendas_csv = SalesReportCSV('nome_relatorio')
relatorio_de_vendas_csv.serialize()

# Isso não funcionará
# meu_relatorio = SalesReport()

# Isso também não, a não ser que SalesReportJSON defina a função `get_length`
meu_relatorio = SalesReportJSON('meu_relatorio')
print(meu_relatorio.get_length())
