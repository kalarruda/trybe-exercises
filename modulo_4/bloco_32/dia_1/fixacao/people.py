import area

PESSOA_POR_METRO = 2
# numero de pessoas por metro quadrado em média
FIELD_LENGTH = 240  # em metros
FIELD_WIDTH = 45  # em metros
PEOPLE_AT_CONCERT = (
    area.retangulo(FIELD_LENGTH, FIELD_WIDTH) // PESSOA_POR_METRO
)


print("Estão presentes no show aproximadamente", PEOPLE_AT_CONCERT, "pessoas")
