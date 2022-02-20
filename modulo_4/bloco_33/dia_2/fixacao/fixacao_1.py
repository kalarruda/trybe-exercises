from abc import ABC, abstractmethod
from csv import DictWriter
import gzip
import json


class RelatorioVendas(ABC):
    def __init__(self, arquivo_exportado):
        self.arquivo_exportado = arquivo_exportado

    def build(self):
        return[
          {
            'Coluna 1': 'Dado 1',
            'Coluna 2': 'Dado 2',
            'Coluna 3': 'Dado 3'
          },
          {
            'Coluna 1': 'Dado A',
            'Coluna 2': 'Dado B',
            'Coluna 3': 'Dado C'
          }]

    def compress(self):
        conteudo_binario = json.dump(self.build()).encode('utf-8')

        with gzip.open(self.arquivo_exportado + 'gzip', 'wb') as file:
            file.write(conteudo_binario)

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


class RelatorioVendasJson(RelatorioVendas):
    def serialize(self):
        with open(self.arquivo_exportado + 'json', 'w') as arquivo_json:
            json.dump(self.build(), arquivo_json)


class RelatorioVendasCSV(RelatorioVendas):
    def serialize(self):
        with open(self.arquivo_exportado + 'csv', 'w') as arquivo_csv:
            headers = ['Coluna 1', 'Coluna 2', 'Coluna 3']
            csv_escreve = DictWriter(arquivo_csv, headers)
            csv_escreve.writeheader()
            for item in self.build():
                csv_escreve.writerow(item)
